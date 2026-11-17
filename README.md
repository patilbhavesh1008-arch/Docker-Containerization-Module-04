# Docker & Containerization - Module 04

## Project Overview
A Node.js web application containerized using Docker and deployed on AWS EC2.

## Technologies
- AWS EC2
- Amazon Linux 2023
- Docker
- Docker Compose
- Node.js
- Docker Networking
- Docker Volumes

## Project Architecture
Source Code → Dockerfile → Docker Image → Container → Docker Compose → Running Application

## Features
- Docker Image Creation
- Container Management
- Custom Docker Network
- Persistent Docker Volume
- Environment Variables
- Docker Compose Deployment
- Application Health Check

## Application Endpoints
- `/` - Application Information
- `/health` - Health Check
- `/save?text=hello` - Save Data
- `/data` - View Saved Data

## Run Project
```bash
docker compose up -d
