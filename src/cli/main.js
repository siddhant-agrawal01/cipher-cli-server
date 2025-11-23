#!/usr/bin/env node

import dotenv from "dotenv";

import chalk from "chalk";

import figlet from "figlet";

import { Command } from "commander";

dotenv.config();

async function main() {
  //Display banner
  console.log(
    chalk.magenta(
      figlet.textSync("Cipher CLI", {
        font: "Standard",
        horizontalLayout: "default",
      })
    )
  );
  console.log(chalk.gray("AI based Cli \n"));

  const program = new Command("orbital");
  program
    .version("0.0.1")
    .description("Cipher Cli - AI that runs your workflow");

  program.action(() => {
    program.help();
  });

  program.parse();
}

main().catch((err) => {
  console.log(chalk.red("Some Error running in cipher cli"));
  process.exit(1);
});
