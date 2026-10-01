# 🛠️ Magick Studio

A professional, cross-platform graphical user interface (GUI) for **ImageMagick** built entirely in Python using CustomTkinter.

<div align="center">
<img src="preview.png" width="80%" height="auto" alt="preview" />
</div>

## ✨ Features

* **Geometry & Format Suite:** Fast proportionally scaled down sampling (`-resize`), precise box boundary extractions (`-crop`), and backdrop canvas extensions (`-extent`).
* **Color & Effects Core:** Tailor compression ratios (`-quality`), clean profile metadata arrays (`-strip`), map color profiles (`-colorspace`), and apply localized convolution matrices.
* **Mass Batch Processing Engine:** Automate directory evaluations over many media files using custom extension filters and argument chains.
* **Diagnostics Log Console:** Built-in un-sandboxed raw CLI pipeline simulation field alongside instant full-detail metadata extraction pipelines (`identify -verbose`).

---

**Current limitations:** Image actions are blocked by a command-parsing defect; the Geometry and Effects Browse dialogs also fail when suggesting output paths. See [`BUGS.md`](BUGS.md) for confirmed issues and [`TODO.md`](TODO.md) for planned remediation.

## 📁 System Architecture Layout

```text
MagickStudio/
├── main.py                # Main Application Entry Bootloader
├── core.py                # Shared Subprocess Wrapper & Styling Guide
├── requirements.txt       # Python Dependencies Manifest
├── launch.vbs             # Windows Hidden Console Window Wrapper
├── launch.command         # macOS Hidden Console Window Wrapper
├── MagickStudio.desktop   # Linux desktop entry (launcher target currently missing)
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


After installing the prerequisites, start the app from the `MagickStudio/` directory:

```bash
python main.py
```

### Windows

Double-click the **`launch.vbs`** script file to pop the GUI interface open instantly with zero background command prompt terminal windows appearing.

### macOS

Double-click the **`launch.command`** script file to pop the GUI interface open instantly with zero background command prompt terminal windows appearing.

### Linux

Run **`python3 main.py`** from `MagickStudio/`. The tracked **`MagickStudio.desktop`** entry points to a missing `launch.sh`; it cannot be used until the launcher is restored (see [`BUGS.md`](BUGS.md)).

---

## 🧰 Prerequisites / Manual Adjustments

Ensure these target core components are installed on your device and bound to your System PATH variables:

* **Python:** Runtime Engine (v3.10 or higher).
* **ImageMagick:** CLI Core Utility Toolkit Binary.
* **Python Modules:** `pip install customtkinter pillow`.

---

## 🌐 Project Website

The project page is published with GitHub Pages at [helix-origin.github.io/Magick-Studio](https://helix-origin.github.io/Magick-Studio/), as a subpage of the [HELIX Origin homepage](https://helix-origin.github.io/). It is a static site in [`docs/`](docs/) styled with the [vCard – Personal Portfolio](https://github.com/codewithsadee/vcard-personal-portfolio) template (MIT license; see [`docs/LICENSE`](docs/LICENSE)).

GitHub Pages publishes the `docs/` folder from the `main` branch. In **Settings → Pages**, select **Deploy from a branch**, then choose `main` and `/docs` as the folder. Keep asset paths relative (for example `./assets/css/style.css`) so they resolve beneath `/Magick-Studio/`. To preview locally, run `python3 -m http.server --directory docs` and open `http://localhost:8000/`.

---

## 🤝 Contributing

Contributions, bug reports, parameter updates, and custom sub-cogs features tracking ideas are completely welcome! Feel free to fork the framework package layers, modify view elements on top-level layout trees, and open a remote Pull Request pass cleanly.

For contributor and coding-agent guidance, start with [`AGENTS.md`](AGENTS.md). Project-specific agent roles, skills, rules, and templates are in [`.agents/`](.agents/README.md); tracked defects and proposed work are in [`BUGS.md`](BUGS.md), [`TODO.md`](TODO.md), and [`ROADMAP.md`](ROADMAP.md).
