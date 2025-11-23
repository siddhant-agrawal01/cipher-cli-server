#!/usr/bin/env node

import dotenv from "dotenv";

import chalk from "chalk";

import figlet from "figlet";

import { Command } from "commander";

dotenv.config();

async function main() {
  //Display banner
  console.log(
    chalk.green(
      figlet.textSync("Cipher CLI", {
        font: "Standard",
        horizontalLayout: "default",
      })
    )
  );
  console.log(chalk.blue("AI based Cli \n"));
}
