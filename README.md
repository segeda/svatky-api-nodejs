svatky-api-nodejs
=================

[Svátky API](https://svatky.adresa.info/) Vám řekne kdo má kdy svátek, nebo kdy má kdo svátek.

[Svatky API](https://svatky.adresa.info/) - Find out which date in the year is your Name Day or who's Name Day is on a certain date.

This API only accept **GET** requests with three parameters: date, name, lang.

* lang -- Formatted to accept either cs or sk
    * cs || sk

* date -- Formatted date first followed by month. Ex: May 15 => 1505
    * DDMM

* name -- Formatted for first names only. Ex: Michal, Anna, Karina


For example, if we wanted to search for when the Name Day is of Anna in JSON, we would set the parameters up like so:
https://svatky.adresa.info/json?lang=cs&name=Anna

If we wanted to know who is celebrating their Name Day on May 15th, we would set the parameters like so:
https://svatky.adresa.info/json?lang=cs&date=1505


## Response: 
Below is the response format of the JSON, XML, and txt. When a GET request is succesful, you will see the data presented like this.

### json
```[{"date":  "2607",, "name": "Anna"}...]```

### xml

```
<?xml version="1.0" encoding="UTF-8"?>
<svatky>
    <svatek>
        <date>2607,</date>
        <name>Anna</name>
    </svatek>
    ...
</svatky>
```
                    
### txt
```2607;Anna```
