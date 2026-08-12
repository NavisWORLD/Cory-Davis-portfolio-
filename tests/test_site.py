from html.parser import HTMLParser
from pathlib import Path
import unittest

ROOT = Path(__file__).resolve().parents[1]
PAGES = [ROOT / "index.html", ROOT / "projects.html", ROOT / "resume.html"]


class LinkParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.hrefs = []
        self.srcs = []
        self.titles = []
        self._in_title = False

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == "a" and attrs.get("href"):
            self.hrefs.append(attrs["href"])
        if tag in {"script", "img"} and attrs.get("src"):
            self.srcs.append(attrs["src"])
        if tag == "title":
            self._in_title = True

    def handle_endtag(self, tag):
        if tag == "title":
            self._in_title = False

    def handle_data(self, data):
        if self._in_title and data.strip():
            self.titles.append(data.strip())


def local_target(ref: str):
    if ref.startswith(("http://", "https://", "mailto:", "tel:", "#", "javascript:")):
        return None
    clean = ref.split("#", 1)[0].split("?", 1)[0]
    if not clean:
        return None
    return ROOT / clean


class PortfolioIntegrityTests(unittest.TestCase):
    def test_expected_public_pages_exist(self):
        for page in PAGES:
            self.assertTrue(page.exists(), page)
        self.assertTrue((ROOT / "styles.css").exists())
        self.assertTrue((ROOT / "app.js").exists())
        self.assertTrue((ROOT / "LICENSE").exists())

    def test_local_links_and_assets_resolve(self):
        for page in PAGES:
            parser = LinkParser()
            parser.feed(page.read_text(encoding="utf-8"))
            for ref in parser.hrefs + parser.srcs:
                target = local_target(ref)
                if target is not None:
                    self.assertTrue(target.exists(), f"{page.name}: missing {ref}")

    def test_each_page_has_title(self):
        for page in PAGES:
            parser = LinkParser()
            parser.feed(page.read_text(encoding="utf-8"))
            self.assertTrue(parser.titles, f"{page.name} missing title")

    def test_correct_public_email_and_no_old_typo(self):
        combined = "\n".join(page.read_text(encoding="utf-8") for page in PAGES)
        combined += "\n" + (ROOT / "README.md").read_text(encoding="utf-8")
        self.assertIn("pheras.king@gmail.com", combined)
        self.assertNotIn("phrase.king@gmail.com", combined)

    def test_core_navigation_is_present(self):
        for page in PAGES:
            text = page.read_text(encoding="utf-8")
            for target in ("index.html", "projects.html", "resume.html"):
                self.assertIn(target, text, f"{page.name} missing navigation to {target}")


if __name__ == "__main__":
    unittest.main()
