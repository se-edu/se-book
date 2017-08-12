set -x
git checkout -b temp
git commit -m "$1"
git checkout master
git merge temp
git branch -D temp
git status