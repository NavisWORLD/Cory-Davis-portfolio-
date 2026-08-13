from html.parser import HTMLParser
from pathlib import Path
import unittest

ROOT = Path(__file__).resolve().parents[1]
PAGES = [
    ROOT / "index.html",
    ROOT / "projects.html",
    ROOT / "works.html",
    ROOT / "universe.html",
    ROOT / "library.html",
    ROOT / "resume.html",
    ROOT / "publications.html",
    ROOT / "timeline.html",
    ROOT / "proof.html",
    ROOT / "offerings.html",
]
RECORDS = [
    "README.md",
    "REPOSITORY_UNIVERSE.md",
    "PUBLICATIONS.md",
    "TIMELINE.md",
    "PROOF_LEDGER.md",
    "OFFERINGS.md",
    "ARTIFACTS.sha256",
    "WORD_LIBRARY_2026-08-12.md",
    "WORD_LIBRARY_2026-08-12.sha256",
    "archive/2026-08-12/README.md",
    "archive/2026-08-12/DOCUMENT_ARCHIVE_2026-08-12.sha256",
    "CITATION.cff",
    "PROVENANCE.md",
    "EVIDENCE.md",
]


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
    if ref.startswith(("http://", "https://", "mailto:", "tel:", "#", "javascript:", "data:")):
        return None
    clean = ref.split("#", 1)[0].split("?", 1)[0]
    if not clean:
        return None
    return ROOT / clean


def hash_lines(path: Path):
    return [
        line for line in path.read_text(encoding="utf-8").splitlines()
        if line.strip() and not line.lstrip().startswith("#")
    ]


class PortfolioIntegrityTests(unittest.TestCase):
    def test_expected_public_pages_and_records_exist(self):
        for page in PAGES:
            self.assertTrue(page.exists(), page)
        for required in ["styles.css", "app.js", "ascii-ui.js", "ascii-ui.css", "LICENSE", *RECORDS]:
            self.assertTrue((ROOT / required).exists(), required)

    def test_local_links_and_assets_resolve(self):
        for page in PAGES:
            parser = LinkParser()
            parser.feed(page.read_text(encoding="utf-8"))
            for ref in parser.hrefs + parser.srcs:
                target = local_target(ref)
                if target is not None:
                    self.assertTrue(target.exists(), f"{page.name}: missing {ref}")

    def test_each_page_has_title_and_app_runtime(self):
        for page in PAGES:
            source = page.read_text(encoding="utf-8")
            parser = LinkParser()
            parser.feed(source)
            self.assertTrue(parser.titles, f"{page.name} missing title")
            self.assertIn("app.js", source, f"{page.name} does not load app.js")

    def test_correct_public_email_and_no_old_typo(self):
        combined = "\n".join(page.read_text(encoding="utf-8") for page in PAGES)
        combined += "\n" + (ROOT / "README.md").read_text(encoding="utf-8")
        self.assertIn("pheras.king@gmail.com", combined)
        self.assertNotIn("phrase.king@gmail.com", combined)

    def test_core_navigation_targets_exist(self):
        for target in (
            "index.html",
            "projects.html",
            "works.html",
            "universe.html",
            "library.html",
            "resume.html",
            "publications.html",
            "timeline.html",
            "proof.html",
            "offerings.html",
        ):
            self.assertTrue((ROOT / target).exists())

    def test_portfolio_keeps_evidence_provenance_and_nulls_visible(self):
        readme = (ROOT / "README.md").read_text(encoding="utf-8")
        provenance = (ROOT / "PROVENANCE.md").read_text(encoding="utf-8")
        evidence = (ROOT / "EVIDENCE.md").read_text(encoding="utf-8")
        proof = (ROOT / "PROOF_LEDGER.md").read_text(encoding="utf-8")
        self.assertIn("Evidence vocabulary", readme)
        self.assertIn("File presence is not proof of authorship", provenance)
        self.assertIn("NULL", evidence)
        self.assertIn("SHA-256", proof)
        self.assertIn("DOI", proof)
        self.assertIn("25 exact DOCX", proof)
        self.assertIn("52 Markdown source documents", proof)

    def test_public_ui_exposes_runnable_reference_paths_and_record_routes(self):
        app = (ROOT / "app.js").read_text(encoding="utf-8")
        self.assertIn("reference/dyn12_torch", app)
        self.assertIn("reference/universe_engine", app)
        self.assertIn("1Pb7ByxaOfPGL2WBg3IRrlQsQKSg6Ah1X", app)
        self.assertIn("16Neusv03kjHmInoP1d6ufNODeTD_uc6y", app)
        self.assertIn("1-u_tfZ9nxgJZ3AfcaDN1CQS9AcnIg-xf", app)
        for route in ("publications.html", "timeline.html", "proof.html", "offerings.html"):
            self.assertIn(route, app)

    def test_repo_universe_is_current_and_provenance_aware(self):
        universe = (ROOT / "REPOSITORY_UNIVERSE.md").read_text(encoding="utf-8")
        self.assertIn("24 public repositories", universe)
        self.assertIn("COSMOS-HEARTLIGHT", universe)
        self.assertIn("Cosmic-quantum-video-picture-generator-", universe)
        self.assertIn("fork/upstream", universe)

    def test_artifact_hash_manifest_has_primary_sources(self):
        manifest = (ROOT / "ARTIFACTS.sha256").read_text(encoding="utf-8")
        expected = (
            "26292a4e63b3fa5838865fc384682049a93a0e159f72359ec2977be4da46a36a",
            "eee3cb7bac40d20b1481c1a88701a58dabe6739cb151e058c23ba8cbb04d450f",
            "6628ae27052f7ad57ac971a2d3d78ec6aa732f42bcbd12180ca7e38f0796566c",
            "2b316c4d1cc31fce51b70fc2a3fbd555e0569517a22a937f59505bd3b6c0b7e6",
            "b0e572dcc334aca09396695583075080f4dfe953b42e964fce5964b9fb8033a3",
        )
        for digest in expected:
            self.assertIn(digest, manifest)

    def test_august_12_word_library_is_complete_and_hashed(self):
        manifest_path = ROOT / "WORD_LIBRARY_2026-08-12.sha256"
        catalog = (ROOT / "WORD_LIBRARY_2026-08-12.md").read_text(encoding="utf-8")
        lines = hash_lines(manifest_path)
        self.assertEqual(25, len(lines), "00–24 Word manifest must contain exactly 25 artifact lines")
        self.assertIn("00 - START HERE - Cory Davis Public Portfolio Index.docx", catalog)
        self.assertIn("24 - COSMOS Career OS Licensing Boundary.docx", catalog)
        self.assertIn("809f72846e8343c830f5fa8f5b9e4fe6c4c0ce96bfadef1f687306b7dd6797dd", catalog)
        self.assertIn("b3fa81006fe88e281d5e7af6102df954247a8da634c23f06d07dec5c93efc050", catalog)

    def test_august_12_teaching_snapshot_is_complete(self):
        manifest_path = ROOT / "archive/2026-08-12/DOCUMENT_ARCHIVE_2026-08-12.sha256"
        archive_index = (ROOT / "archive/2026-08-12/README.md").read_text(encoding="utf-8")
        lines = hash_lines(manifest_path)
        self.assertEqual(52, len(lines), "dated teaching/manual snapshot must contain exactly 52 source-document lines")
        for phrase in (
            "COSMOS / CST teaching and publication family",
            "COSMOS HEARTLIGHT educator / student / aide / clinician family",
            "COSMOS Music Open Suite teaching and integration family",
            "Reality Bridge / Alien Conductor publication family",
            "Universe / simulation documentation family",
        ):
            self.assertIn(phrase, archive_index)

    def test_publication_proof_and_timeline_pages_surface_document_corpus(self):
        publications = (ROOT / "publications.html").read_text(encoding="utf-8")
        proof = (ROOT / "proof.html").read_text(encoding="utf-8")
        timeline = (ROOT / "timeline.html").read_text(encoding="utf-8")
        for source in (publications, proof, timeline):
            self.assertIn("WORD_LIBRARY_2026-08-12", source)
            self.assertIn("archive/2026-08-12", source)

    def test_private_and_interpretive_material_not_promoted_as_engineering_proof(self):
        publications = (ROOT / "PUBLICATIONS.md").read_text(encoding="utf-8")
        self.assertIn("not promoted as technical proof", publications)
        self.assertIn("HISTORICAL / SUPERSEDED", publications)


if __name__ == "__main__":
    unittest.main()
