export class RibbonContainer {
    constructor() {
        // Initialize DOM elements
        this.fileTabBtn = document.querySelector(".file-tab-btn");
        this.focusFile = document.querySelector('.focus-file');
    
        this.operationsTabBtn = document.querySelector(".operations-tab-btn");
        this.focusOperations = document.querySelector('.focus-operations');
    
        this.graphTabBtn = document.querySelector(".graph-tab-btn");
        this.focusGraph = document.querySelector('.focus-graph');

        // Set up event listeners
        this.addEventListeners();
    }

    // Set up click event listeners for tab buttons
    addEventListeners() {
        this.fileTabBtn.addEventListener("click", () => this.handleTabClick('file'));
        this.operationsTabBtn.addEventListener("click", () => this.handleTabClick('operations'));
        this.graphTabBtn.addEventListener("click", () => this.handleTabClick('graph'));
    }

    // Handle tab button clicks
    handleTabClick(tab) {
        // Define a mapping of tab names to their corresponding elements
        const tabs = {
            file: { btn: this.fileTabBtn, focus: this.focusFile },
            operations: { btn: this.operationsTabBtn, focus: this.focusOperations },
            graph: { btn: this.graphTabBtn, focus: this.focusGraph }
        };

        // Loop through all tabs and update their states
        for (const key in tabs) {
            // only processes known properties and avoids potential issues with inherited properties
            if (tabs.hasOwnProperty(key)) {
                const { btn, focus } = tabs[key];
                if (key === tab) {
                    btn.classList.add("active");
                    focus.classList.remove("d-none");
                } else {
                    btn.classList.remove("active");
                    focus.classList.add("d-none");
                }
            }
        }
    }
}
