set -x
rm _markbind/logs/.audit.json
markbind build
markbind deploy