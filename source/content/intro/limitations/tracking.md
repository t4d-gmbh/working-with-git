### Tracking changes in binary files

Git is not well suited to track changes in binary files.

Binary files are stored as a whole, which can lead to large repositories with slow operations and conflicts that are hard to resolve.

Git LFS (Large File Storage) is a solution to this problem. It allows to store binary files outside of the repository and only track their location and version.
