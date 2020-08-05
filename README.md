svatky-api-nodejs
=================

Svátky API Vám řekne kdo má kdy svátek, nebo kdy má kdo svátek.

[Svatky API](https://svatky.adresa.info/) - Find out which date in the year is your Name Day or who's Name Day is on a certain date.

This API only accpets GET requests with three parameters: date, name, lang.

date
datum ve formátu DDMM

name

lang ===> cs || sk

The API parameters for the search include 



https://svatky.adresa.info/json?lang=cs&name=Anna

## Response: 

### json
[{"date":  "2607",, "name": "Anna"}...]

### xml

<?xml version="1.0" encoding="UTF-8"?>
<svatky>
    <svatek>
        <date>2607,</date>
        <name>Anna</name>
    </svatek>
    ...
</svatky>
                    
### txt
2607;Anna
