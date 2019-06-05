# WPMCounter
NW.js based WPM counter using iohook.

NW.js: https://nwjs.io/

iohook: https://github.com/wilix-team/iohook

Currently in development. 

## Testing 

Requirements: NW.js, and npm. Windows requires the Microsoft Visual C++ Redistributable for iohook https://aka.ms/vs/16/release/vc_redist.x64.exe.

Clone the repo with git
```bash
git clone https://github.com/lemon07r/WPMCounter.git
```
Change your working directory to the project directory
```bash
cd WPMCounter
```
From project directory:
```bash
npm install
```
After downloading and extracting NW.js from https://nwjs.io/downloads/

then (Linux)
```bash
/path/to/nw .
```
or (MacOS)
```bash
/path/to/nwjs.app/Contents/MacOS/nwjs .
```
or (Windows)
```powershell
\path\to\nw.exe .
```
On Windows, you can also just drag the folder containing package.json (the project folder) to nw.exe to run the app.

See http://docs.nwjs.io/en/latest/For%20Users/Getting%20Started/#example-1-hello-world for more information.
