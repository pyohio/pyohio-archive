#!/bin/bash

# Replace links with https ones prefixed w/ 2017:

git ls-files -z | xargs -0 sed -i -e 's/src=\"\//src=\"\/2017\//g'
git ls-files -z | xargs -0 sed -i -e 's/href=\"\//href=\"\/2017\//g'
git ls-files -z | xargs -0 sed -i -e 's/href=\"http:\/\/www.pyohio.org\//href=\"https:\/\/www.pyohio.org\/2017\//g'
git ls-files -z | xargs -0 sed -i -e 's/href=\"https:\/\/pyohio.org/href=\"https:\/\/www.pyohio.org\/2017/g'
git ls-files -z | xargs -0 sed -i -e 's/href=\"http:\/\/pyohio.org/href=\"https:\/\/www.pyohio.org\/2017\//g'
git ls-files -z | xargs -0 sed -i -e 's/HREF=\"https:\/\/pyohio.org\//HREF=\"https:\/\/www.pyohio.org\/2017\//g'
git ls-files -z | xargs -0 sed -i -e 's/URL=https:\/\/pyohio.org\//URL=\"https:\/\/www.pyohio.org\/2017\//g'

