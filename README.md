# Renovate Runner

Run Renovate using Docker with the configuration in [config.js](config.js) and the container definition in [docker-compose.yml](docker-compose.yml).

## Run via GitHub Actions workflow

The workflow in [.github/workflows/renovate.yml](.github/workflows/renovate.yml) runs on a self-hosted runner and is triggered daily at 16:30 UTC. It can also be triggered manually via the "Run workflow" button in the GitHub Actions tab.

1. Ensure your self-hosted runner has Docker and Docker Compose available.
2. Add the required secrets in the repository settings:
   - `RENOVATE_TOKEN` - A GitHub Personal Access Token (PAT) with the necessary permissions to access the repositories you want to manage with Renovate.

## Run locally

From the repository root, provide credentials and run Renovate using Docker Compose.

```bash
export RENOVATE_TOKEN="<your_PAT_token>"

docker compose run --rm renovate
```
