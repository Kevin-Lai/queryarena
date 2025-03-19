#!/usr/bin/env bash
# exit on error
set -o errexit

# Build commands for the backend
bundle install
bundle exec rails assets:precompile
bundle exec rails assets:clean

# Build commands for the frontend
rm -rf public
npm install && npm run build
cp -a build/. public/

# Seed the db
bundle exec rails db:migrate
bundle exec rails db:seed