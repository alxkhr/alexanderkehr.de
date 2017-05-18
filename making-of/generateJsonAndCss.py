import xml.etree.ElementTree as etree
# from random import randint
import re

tree = etree.parse('input.svg')
root = tree.getroot()

cssstring = ''
jsonstring = ''
for index, path in enumerate(root.findall('.//{http://www.w3.org/2000/svg}path')):
    className = 'triangle-'+`index`
    color = re.search("(?<=fill:)#(......)", path.get('style')).group(0)
    geometry = path.get('d')
    delay = index*10;
    cssstring += '.'+className+' { animation-delay: '+`delay`+'ms; fill: '+color+'; }\n'
    jsonstring += '{ "className": "'+className+'", "d": "'+geometry+'" },\n'

with open('./output/style.css', 'w+') as cssfile:
    cssfile.write(cssstring)

with open('./output/content.json', 'w+') as jsonfile:
    jsonfile.write(jsonstring)
