# PyOhio Archive

Static archives of previous years' PyOhio websites and logos.

## Logos

[PyOhio Logos](/logos/)

## Website Archive

The static files here are hosted on the live PyOhio site:

- [2023](https://www.pyohio.org/2023/)
- [2022](https://www.pyohio.org/2022/)
- [2021](https://www.pyohio.org/2021/)
- [2020](https://www.pyohio.org/2020/)
- [2019](https://www.pyohio.org/2019/)
- [2018](https://www.pyohio.org/2018/)
- [2017](https://www.pyohio.org/2017/)

### Instructions

#### Static Sites (2019-present)

Copy the generated `public` directory to a directory named for the year in this repo.

#### Older Dynammic Sites

We follow a similar process to the one the [PyCon US website archive](https://github.com/PyCon/pycon-archive) uses as described here: http://gerg.ca/blog/post/2013/archiving-pycon/

Our process:

- Run `httrack` against the current year's site: `httrack -w -o0 -K4 -c20 https://pyohio.org/2018/`
- Replace dynamic login pages with static pages noting the dashboard is disabled.
- Remove login / signup links

## Contibuting

Notice a problem with the archived sites? Issues / PRs welcome!
