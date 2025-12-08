/**
 * @fileoverview Utility module for reading input files asynchronously.
 * This module provides a simple wrapper around Node.js fs.promises functionality
 * to read input files for Advent of Code challenges.
 */

import * as fs from "fs";
const { readFile } = fs.promises;

/**
 * Reads the contents of a file asynchronously and returns it as a string.
 *
 * @param path - The path to the input file to be read
 * @returns {Promise<string>} A promise that resolves with the contents of the file as a UTF-8 encoded string
 * @throws {Error} If the file cannot be read or does not exist
 *
 * @example
 * try {
 *   const content = await readInput('./input.txt');
 *   console.log(content);
 * } catch (error) {
 *   console.error('Error reading file:', error);
 * }
 */
export async function readInput(path: string): Promise<string> {
  return await readFile(path, "utf-8");
}
