---

# RUSH MD

<p align="center">
  <a href="https://github.com/Rush-techmd"><img src="http://readme-typing-svg.herokuapp.com?color=red&center=true&vCenter=true&multiline=false&lines=Rush-MD+MultiDevice;Developed+by+Rush;Give+star+and+forks+this+Repo+🌟" alt="RushReadme"></a>
</p>

## ❤️‍🩹 Getting Started

To get started, follow these steps:

### 1. Fork This Repository

Start by forking this repository to your own GitHub account. Click the button below to fork:

<a href='https://github.com/Rush-techmd/Rush-md/fork' target="_blank"><img alt='Fork repo' src='https://img.shields.io/badge/Fork This Repo-black?style=for-the-badge&logo=git&logoColor=white'/></a>

### 2. Get Session ID AND PAIR

You'll need a session ID to run the bot. Click the button below to obtain your session ID:

<a href='https://suvistore.blogspot.com/2024/09/qeen-nithu.html' target="_blank"><img alt='Get Session ID' src='https://img.shields.io/badge/Click here to get your session id-black?style=for-the-badge&logo=opencv&logoColor=red'/></a>




## CONTACT BOT DEPLOY PLAN

<a href='wa.me//94762498519?text=hi_mounthly_plan_එකට_බොට්_හදගන්න_ඕනෙ👋' target="_blank"><img alt='Get Session ID' src='https://img.shields.io/badge/Mounthly plan-yellow?style=for-the-badge&logo=opencv&logoColor=red'/></a>









##  wa group

<a href='https://chat.whatsapp.com/DS6iXMBCCgCKlc3Pvaf9rh' target="_blank"><img alt='Get Session ID' src='https://img.shields.io/badge/Click here to get whatsapp group-black?style=for-the-badge&logo=opencv&logoColor=red'/></a>



##   OTHER

<a href='https://suvistore.blogspot.com/2024/09/qeen-nithu.html' target="_blank"><img alt='Get Session ID' src='https://img.shields.io/badge/other-black?style=for-the-badge&logo=opencv&logoColor=red'/></a>



```
name: Node.js CI

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main
  schedule:
    - cron: '0 */6 * * *'  # Relance toutes les 6 heures

jobs:
  build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [20.x]

    steps:
    - name: Checkout repository
      uses: actions/checkout@v3

    - name: Set up Node.js
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}

    - name: Install dependencies
      run: npm install

    - name: Install FFmpeg
      run: sudo apt-get install -y ffmpeg

    - name: Start application with timeout
      run: |
        timeout 21590s npm start  # Limite l'exécution à 5h 59m 50s

    - name: Save state (Optional)
      run: |
        ./save_state.sh
