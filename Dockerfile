FROM java

RUN apt-get update

RUN apt-get install -y --no-install-recommends \
    software-properties-common ca-certificates curl \
    sudo supervisor socat \
    xvfb x11vnc fluxbox xterm

# google chrome install
RUN curl -fsSL https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
    && echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" > /etc/apt/sources.list.d/google-chrome.list \
    && apt-get update \
    && apt-get install -y --no-install-recommends google-chrome-stable

# nodejs install
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash - \
    && apt-get install -y nodejs

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN chmod 777 ./scripts/runTestsWithAllure.sh

ENV CHROME_PATH /usr/bin/google-chrome

EXPOSE 9999
ENTRYPOINT ./scripts/runTestsWithAllure.sh
