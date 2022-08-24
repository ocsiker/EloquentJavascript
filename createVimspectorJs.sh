#!/bin/bash
echo "{
  \"configurations\": { 
    \"run\": {
      \"adapter\": \"vscode-node\",
      \"filetypes\": [ \"javascript\", \"typescript\" ], // optional
      \"configuration\": {
        \"request\": \"launch\",
        \"protocol\": \"auto\",
        \"stopOnEntry\": true,
        \"console\": \"integratedTerminal\",
        \"program\": \"\${workspaceRoot}/${1}\",
        \"cwd\": \"\${workspaceRoot}\"
      }
    }
  }
}">.vimspector.json

