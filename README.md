# 🛠️ Magick Studio

A professional, cross-platform graphical user interface (GUI) for **ImageMagick** built entirely in Python using CustomTkinter.

<div align="center">
<img src="preview.png" width="80%" height="auto" alt="preview" />
</div>

## ✨ Features

* **Geometry & Format Suite:** Fast proportionally scaled down sampling (`-resize`), precise box boundary extractions (`-crop`), and backdrop canvas extensions (`-extent`).
* **Color & Effects Core:** Tailor compression ratios (`-quality`), clean profile metadata arrays (`-strip`), map color profiles (`-colorspace`), and apply localized convolution matrices.
* **Mass Batch Processing Engine:** Automate directory evaluations over hundreds of media files simultaneously using custom extension filters and arguments chain strings.
* **Diagnostics Log Console:** Built-in un-sandboxed raw CLI pipeline simulation field alongside instant full-detail metadata extraction pipelines (`identify -verbose`).

---

## 📁 System Architecture Layout

```text
MagickStudio/
├── main.py                # Main Application Entry Bootloader
├── core.py                # Shared Subprocess Wrapper & Styling Guide
├── requirements.txt       # Python Dependencies Manifest
├── launch.vbs             # Windows Hidden Console Window Wrapper
├── launch.sh              # Linux Hidden Console Window Wrapper
├── launch.command         # macOS Hidden Console Window Wrapper
├── MagicStudio.desktop    # Desktop shortcut entree for linux users
├── assets/                # Auto-compiled Multi-Resolution Icon Folder
└── tabs/                  # Main Panel Module Controllers Package
    ├── geometry.py
    ├── effects.py
    ├── raw.py
    ├── batch.py
    ├── documentation.py
    ├── geometry_cogs/     # Independent Submodule Views
    ├── effects_cogs/
    ├── raw_cogs/
    ├── batch_cogs/
    └── doc_cogs/
```

---

## 🏁 Launching the Studio Application


Once your deployment bootstrapper finishes successfully, spin up the unified workspace app container:

```bash
python main.py
```

### Windows

Double-click the **`launch.vbs`** script file to pop the GUI interface open instantly with zero background command prompt terminal windows appearing.

### macOS

Double-click the **`launch.command`** script file to pop the GUI interface open instantly with zero background command prompt terminal windows appearing.

### Linux

Double-click the **`launch.sh`** script file to pop the GUI interface open instantly with zero background command prompt terminal windows appearing. There is also a **`MagicStudio.desktop`** file for use with adding a desktop shortcut to the Magic Studio app on Linux.

**Note**: Linux users will need to run `chmod +x launch.sh` to make the launch script executeable.

---

## 🧰 Prerequisites / Manual Adjustments

Ensure these target core components are installed on your device and bound to your System PATH variables:

* **Python:** Runtime Engine (v3.10 or higher).
* **ImageMagick:** CLI Core Utility Toolkit Binary.
* **Python Modules:** `pip install customtkinter pillow`.

---

## 🌐 Project Website

The project page is published with GitHub Pages at [helix-origin.github.io/Magick-Studio](https://helix-origin.github.io/Magick-Studio/), as a subpage of the [HELIX Origin homepage](https://helix-origin.github.io/). It is a static site in [`docs/`](docs/) styled with the [vCard – Personal Portfolio](https://github.com/codewithsadee/vcard-personal-portfolio) template (MIT license; see [`docs/LICENSE`](docs/LICENSE)).

The [`pages.yml`](.github/workflows/pages.yml) workflow deploys `docs/` on every push to `main` that changes the site. For first-time setup, add a repository secret named `PAGES_TOKEN` with Pages write permission so the workflow can enable Pages; alternatively, enable Pages in **Settings → Pages** and select **GitHub Actions** as the source. Keep asset paths relative (for example `./assets/css/style.css`) so they resolve beneath `/Magick-Studio/`. To preview locally, run `python3 -m http.server --directory docs` and open `http://localhost:8000/`.

---

## 🤝 Contributing

Contributions, bug reports, parameter updates, and custom sub-cogs features tracking ideas are completely welcome! Feel free to fork the framework package layers, modify view elements on top-level layout trees, and open a remote Pull Request pass cleanly.

For contributor and coding-agent guidance, start with [`AGENTS.md`](AGENTS.md). Project-specific agent roles, skills, rules, and templates are in [`.agents/`](.agents/README.md); tracked defects and proposed work are in [`BUGS.md`](BUGS.md), [`TODO.md`](TODO.md), and [`ROADMAP.md`](ROADMAP.md).
