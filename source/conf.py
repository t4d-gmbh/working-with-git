# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information

project = 'Working With Git'
copyright = '2023, T4D GmbH'
author = 'Jonas I. Liechti'
release = '0.1'

# -- General configuration ---------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#general-configuration

extensions = [
    "myst_parser",
    "sphinx_favicon",
    "sphinx_design",
]

templates_path = ['_templates']
exclude_patterns = []

# -- Options for HTML output -------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output

html_theme = 'sphinx_book_theme'
html_static_path = ['_static']

html_theme_options = {
    "repository_url": "https://github.com/t4d-gmbh/working-with-git",
    "repository_branch": "main",
    "path_to_docs": "source/",
    "use_edit_page_button": True,
    "use_repository_button": True,
    "toc_title": "Content",
    "use_sidenotes": True,
    "logo": {
        "image_light": "_static/Badge_v4_bw.svg",
        "image_dark": "_static/Badge_v4_wb.svg",
        }
}

favicons = [
    "Badge_v4_bw.svg"
]

myst_enable_extensions = [
    "colon_fence",
]
