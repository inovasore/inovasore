#!/usr/bin/env bash
# Uso: PORT=4322 bash scripts/lighthouse/run.sh docs/lighthouse/<fecha>-<nombre>
# Requiere `npm run build` + `npx astro preview` corriendo en PORT (build de producción, no dev).
set -u
OUT="$1"
mkdir -p "$OUT/raw"
CHROME="C:/Program Files/Google/Chrome/Application/chrome.exe"
export CHROME_PATH="$CHROME"
declare -A PAGES=( [inicio]="/" [servicios]="/servicios/" [paginas-web-ambato]="/paginas-web-ambato/" )
for name in "${!PAGES[@]}"; do
  for ff in mobile desktop; do
    for run in 1 2 3; do
      extra=""
      [ "$ff" = "desktop" ] && extra="--preset=desktop"
      npx --yes lighthouse@12.8.2 "http://localhost:${PORT:?set PORT}${PAGES[$name]}" $extra \
        --output=json --output-path="$OUT/raw/${name}-${ff}-${run}.json" \
        --chrome-flags="--headless=new --no-sandbox" --quiet >/dev/null 2>&1
      echo "done $name $ff $run"
    done
  done
done
