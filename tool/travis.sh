#!/bin/bash

# Fast fail the script on failures.
set -e

cd server

pub get

# Run the tests.
pub run test test
