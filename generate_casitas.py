import base64

b = open('public/icons/casa-861452.png', 'rb').read()
data = base64.b64encode(b).decode()

positions = [
    (120, 90, -12, 1.1), (380, 200, 25, 0.9), (720, 130, -30, 1.2),
    (1050, 80, 10, 1.0), (200, 420, 40, 0.85), (560, 380, -15, 1.15),
    (900, 450, 20, 0.95), (1300, 400, -25, 1.05), (300, 700, 5, 1.2),
    (650, 680, -40, 0.9), (1100, 720, 15, 1.1), (1450, 650, 30, 0.8),
    (80, 900, -20, 1.0), (500, 920, 35, 1.15), (1000, 900, -10, 0.95),
    (1400, 950, 20, 1.0),
]

lines = [
    '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1600 1000" width="1600" height="1000">',
]
for x, y, r, s in positions:
    lines.append(f'  <g transform="translate({x},{y}) rotate({r}) scale({s})">')
    lines.append(f'    <image href="data:image/png;base64,{data}" x="-32" y="-32" width="64" height="64" opacity="0.35" />')
    lines.append('  </g>')
lines.append('</svg>')

open('public/patterns/casitas.svg', 'w', encoding='utf-8').write('\n'.join(lines))
print('OK')
