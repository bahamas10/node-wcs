wcs (word count streams)
========================

A tool like wordcount that supports continuous streams at a regular interval

Install
------

Install the command line utility `wcs`

    npm install -g wcs

Usage
-----

    Usage: stream | wcs [interval]

    tail -f <some file> | wcs 1000

Example
-------

If stdin finishes, the program acts just like wc(1)

    $ echo 'hello how are you?' | wc
       1       4      19
    $ echo 'hello how are you?' | wcs
       1 4 19

However, unlike wc(1), `wcs` will count frequency at a regular interval
(1000 ms by default, can be changed by setting the first argument), so
you can do cool things like...

    $ while sleep 1; do echo 'hello how are you?'; done | wcs
    1 4 19
    1 4 19
    1 4 19
    1 4 19
    ^C
    $ while sleep .5; do echo 'hello how are you?'; done | wcs
    2 8 38
    2 8 38
    2 8 38
    2 8 38
    ^C

Known Issues
------------

* Some weirdness with buffering/back pressure on the pipe...
don't fully trust the output

License
-------

MIT Licensed
