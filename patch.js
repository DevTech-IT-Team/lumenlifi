const fs = require('fs');
let c = fs.readFileSync('src/pages/index.jsx', 'utf8');
c = c.replace(/function SpeedTableSection\(\) \{[\s\S]*?\}\n/, '');
c = c.replace('<SpeedTableSection />', '<RaceAgainstTime />');
const lines = c.split('\n');
lines.splice(15, 0, "import RaceAgainstTime from '../components/RaceAgainstTime';");
fs.writeFileSync('src/pages/index.jsx', lines.join('\n'));
