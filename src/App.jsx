import React, { useState, useEffect, useRef, useCallback } from 'react';
import './App.css';
import myCV from './assets/CVBelindaBoudra.pdf';

const BOOT_LINES = [
  "> Initializing Portfolio OS...",
  "> Loading system kernels...",
  "> Optimizing neural interface...",
  "> Connection established.",
  "> Welcome, visitor.",
  "> Type 'help;' to see available commands.",
  "" //
];

const PROJECTS = {
  thepath: { stack: "Electron, JS, HTML/CSS", desc: "Pixel-art tarot deck with zodiac integration." },
  lilweather: { stack: "Electron, JS, HTML/CSS", desc: "Dynamic weather app with auto-localization." },
  chefegg: { stack: "Tauri, JS, HTML/CSS", desc: "Egg timer with frame-by-frame animations." },
  flipnflop: { stack: "Electron, JS, HTML/CSS", desc: "Interactive recipes with pixel-art animations." }

};

const HACK_GLITCHES = [
  "OVERRIDING_ENCRYPTION_LAYER...", "ROOT_ACCESS_GRANTED", "PIXEL_ENGINE_BREACH",
  "BYPASSING_FIREWALL_0x442", "STRIKING_VISUAL_DETECTED", "FETCHING_SECRET_DATA",
  "DECRYPTING_BELINDA_FILES...", "CORE_DUMP_IN_PROGRESS", "SOCIAL_ENGINEERING_INIT",
  "INJECTING_PAYLOAD...", "UPLINK_ESTABLISHED", "DATABASE_LEAK_0%"
];

function App() {
  const [history, setHistory] = useState([]);
  const [booting, setBooting] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [isLocked, setIsLocked] = useState(false);
  const [userRole, setUserRole] = useState("user");
  const [refusalCount, setRefusalCount] = useState(0); // Added for the hire-loop logic

  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  useEffect(() => {
    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < BOOT_LINES.length) {
        setHistory(prev => [...prev, BOOT_LINES[currentLine]]);
        currentLine++;
      } else {
        setBooting(false);
        clearInterval(interval);
      }
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const printLines = useCallback((lines, delay = 150) => {
    lines.forEach((line, index) => {
      setTimeout(() => {
        setHistory(prev => [...prev, line]);
      }, index * delay);
    });
  }, []);

  const triggerVictorySequence = () => {
    setIsLocked(false);
    setUserRole("employee");
    setHistory(prev => [...prev, "EXCELLENT CHOICE."]);

    const fireworks = [
      { text: "                 .                         .                ", color: "#FF5555" },
      { text: "      .                 .              .                 .  ", color: "#FFB86C" },
      { text: "             * * * ", color: "#F1FA8C" },
      { text: "    .                .    \\ | /    .                .       ", color: "#50FA7B" },
      { text: "       * .          - O -          .        * ", color: "#FF79C6" },
      { text: "    .                .    / | \\    .                .       ", color: "#BD93F9" },
      { text: "             * * * ", color: "#8BE9FD" },
      { text: "                 .                         .                ", color: "#FF5555" },
      { text: "      .                 .              .                 .  ", color: "#FFB86C" },
      { text: "             * * * ", color: "#F1FA8C" },
      { text: "    .                .    \\ | /    .                .       ", color: "#50FA7B" },
      { text: "       * .          - O -          .        * ", color: "#FF79C6" },
      { text: "    .                .    / | \\    .                .       ", color: "#BD93F9" },
      { text: "             * * * ", color: "#8BE9FD" },
      { text: "                 .                         .                ", color: "#FF5555" },
      { text: "      .                 .              .                 .  ", color: "#FFB86C" },
      { text: "             * * * ", color: "#F1FA8C" },
      { text: "    .                .    \\ | /    .                .       ", color: "#50FA7B" },
      { text: "       * .          - O -          .        * ", color: "#FF79C6" },
      { text: "    .                .    / | \\    .                .       ", color: "#BD93F9" },
      { text: "             * * * ", color: "#8BE9FD" },
      { text: "============================================================", color: "#50FA7B" },
      { text: "                      MISSION ACCEPTED.                     ", color: "#50FA7B" },
      { text: "============================================================", color: "#50FA7B" },

      { text: "                Type 'help;' to restore system.             ", color: "#F1FA8C" }
    ];

    fireworks.forEach((line, index) => {
      setTimeout(() => setHistory(prev => [...prev, line]), 400 + (index * 60));
    });
  };

  const handleCommand = (rawInput) => {
    const cleanInput = rawInput.trim().toLowerCase();

       if (isLocked) {
         const flexibleYes = /^y+e+s+;?$/i;

         if (flexibleYes.test(cleanInput)) {
           setRefusalCount(0);
           triggerVictorySequence();
         } else {
           const newCount = refusalCount + 1;
           setRefusalCount(newCount);

           let response = ["ERROR: Access denied. Accept the mission."];

           if (newCount === 2) {
             response.push("Look, you have to type 'yes', otherwise we'll be doing this all day...");
           } else if (newCount >= 3) {
             response.push("*Sigh*... really? Just type 'yes'. Please.");
           }
           response.push("DO YOU ACCEPT? (yes/no)");
           setHistory(prev => [...prev, ...response]);
         }
         return;
       }
    if (!cleanInput) return;

    if (!cleanInput.endsWith(';')) {
      setHistory(prev => [...prev, "Syntax Error: Commands must end with ';'"]);
      return;
    }

    const cmd = cleanInput.slice(0, -1);

    switch (cmd) {
      case 'help':
        setHistory(prev => [...prev, "Commands available:",
            "> help;",
            "> projects;",
            "> infos;",
            "> cv;",
            "> sudo hack; u̷̠͒n̸̥͝k̷̳͝ǹ̸̲o̴̭͛w̵͝ͅṅ̶̳"]);
        break;

      case 'projects':
        printLines([
          "Navigating to ~/portfolio/projects...",
          "--------------------------------------",
          ...Object.keys(PROJECTS).map(p => `> ${p}`),
          "--------------------------------------",
          "Type project name (e.g. 'thepath;') for details."
        ]);
        break;

      case 'flipnflop':
      case 'lilweather':
      case 'chefegg':
      case 'thepath':
        const p = PROJECTS[cmd];
        printLines([
          `PROJECT: ${cmd.toUpperCase()}`,
          `STACK  : ${p.stack}`,
          `DESC   : ${p.desc}`,
          `GITHUB : https://github.com/Belheika/${cmd}`
        ]);
        break;

      case 'infos':
        printLines([
          "____________________________________________________________",
          "DECRYPTING DATABASE: BELINDA_BOUDRA",
          "STATUS: FULLSTACK DEVELOPER [FRONT & BACK END]",
          "____________________________________________________________",
          " [IDENTITY] ",
          "  Location : Espoo, Finland",
          "  Profile  : Full Stack Developer & UI/UX Designer",
          "",
          " [EXPERIENCE] ",
          "  - WebyLab Co. | Front-end Developer & UI Designer",
          "  - Netri Co.   | Web Developer (Intranet & Client solutions)",
          "  - Freelance   | Full Stack Developer & UI/UX Designer",
          "",
          " [TOOLBOX] ",
          "  Git, IntelliJ, APIs, Postman, VirtualBox, Ubuntu.",
          "",
          " [EDUCATION] ",
          "  - Bachelor’s Degree | UI/UX Design | Studi School",
          "  - Associate Degree  | Web Development | Epitech",
          "",
          " [UPLINKS] ",
          "  GitHub   : https://github.com/Belheika",
          "  Dribbble : https://dribbble.com/Belicuss",
          "  Portfolio: https://belheika.netlify.app/",
          "",
          " [LANGUAGES] ",
          "  French (Native), English (Bilingual), Spanish (Elementary)",
          "____________________________________________________________",
          ""
        ], 70);
        break;

      case 'cv':
        setHistory(prev => [...prev, "Opening resume in a new page..."]);
                setTimeout(() => {
                  window.open(myCV, '_blank');
                }, 800);
                break;


      case 'sudo hack':
        setHistory(prev => [...prev, "...", "Accessing restricted core...", "DANGER: SECURITY SYSTEM OVERRIDE DETECTED"]);
        setTimeout(() => {
          for (let i = 0; i < 150; i++) {
            setTimeout(() => {
              const hex = `0x${Math.random().toString(16).substring(2, 10).toUpperCase()}`;
              const glitchText = HACK_GLITCHES[Math.floor(Math.random() * HACK_GLITCHES.length)];
              setHistory(prev => [...prev, `>> ${hex} -- ${glitchText} -- [BREACHING]`]);
            }, i * 8);
          }
        }, 1500);

        setTimeout(() => {
          setIsLocked(true);
          setHistory(prev => [...prev, "", "MISSION: HIRE BELINDA BOUDRA.", "DO YOU ACCEPT? (yes/no)"]);
        }, 3500);
        break;

      default:
        setHistory(prev => [...prev, `Unknown command: '${cmd}'`]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const prefix = isLocked ? "> [LOCKED]: " : `${userRole}@portfolio:~$ `;
      setHistory(prev => [...prev, `${prefix}${inputValue}`]);
      handleCommand(inputValue);
      setInputValue("");
    }
  };

  return (
    <>
      <a
        href="https://belheika.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="external-portfolio-link"
      >
        Looking for my graphic portfolio? →
      </a>

      <div className="terminal-window" onClick={() => inputRef.current?.focus()}>
        <div className="terminal-content">
          {history.map((line, i) => {
            if (line === undefined || line === null) return null;

            let text = "";
            let style = {};

            if (typeof line === 'object') {
              text = line.text || "";
              style = { color: line.color, fontWeight: 'bold' };
            } else {
              text = String(line);
            }

            const promptRegex = /^(user|employee)@portfolio:~\$ /;
            const promptMatch = text.match(promptRegex);
            if (promptMatch) {
              return (
                <div key={i} className="terminal-line">
                  <span className="prompt">{promptMatch[0]}</span>
                  <span>{text.replace(promptMatch[0], "")}</span>
                </div>
              );
            }

            if (text.startsWith("> [LOCKED]: ")) {
              return (
                <div key={i} className="terminal-line">
                  <span className="prompt">> </span>
                  <span>{text.replace("> [LOCKED]: ", "")}</span>
                </div>
              );
            }
            const urlRegex = /(https?:\/\/[^\s]+)/g;
            if (urlRegex.test(text)) {
              const parts = text.split(urlRegex);
              return (
                <div key={i} className="terminal-line" style={style}>
                  {parts.map((part, index) =>
                    urlRegex.test(part) ? (
                      <a key={index} href={part} target="_blank" rel="noopener noreferrer" className="terminal-link">
                        {part}
                      </a>
                    ) : part
                  )}
                </div>
              );
            }

            return <div key={i} className="terminal-line" style={style}>{text}</div>;
          })}

          {!booting && (
            <div className="terminal-line input-line">
              <span className="prompt">
                {isLocked ? "> " : `${userRole}@portfolio:~$ `}
              </span>
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                className="terminal-input"
                spellCheck="false"
                autoComplete="off"
                autoFocus
              />
            </div>
          )}
          <div ref={bottomRef} />
        </div>
      </div>
    </>
  );
}

export default App;