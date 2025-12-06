[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](./CODE_OF_CONDUCT.md) [![Innersource Slack](https://img.shields.io/static/v1?label=slack&message=%23innersource-at-ibm&color=blue&logo=slack)](https://my.slack.com/archives/C012JBDQ283)

# <Z Manufacturing Test Estimated Time to Completion>

This project attempts to use historical data of machine run times during the manufactruing test process to predict when machines currently in test will exit.

## Getting Started

1. clone this repo
2. create a gem user id and password here: https://gemserv6.pok.ibm.com/
3. inside the git repo create a file "credentials.txt" formatted like so:

webhooks=hmc-tke - webhookgoeshere , ettc - anotherwebhookgoeshere , jmet-rtn - anotherwebhookgoeshere

gem=putyourshere

password=putyourshere

4. make sure you never commit "credentials.txt" and can accomplish this by adding the file name to .gitignore

### Prerequisites

This project uses and assumes the following:
1. access to bash commands
2. python 3x
3. python library "ibm_db"

### Installation

A step by step series of examples that tell your users how to get running

```bash
pip3 install -r requirements.txt
```

### Examples

how to run the application: `./minute.sh`

how to get the API data:
http://mitt.pok.ibm.com/mitt/api.php?uuid=a71dc5ab-9d24-4d09-b4a8-269586e3dca1
curl --insecure http://mitt.pok.ibm.com/mitt/api.php?uuid=a71dc5ab-9d24-4d09-b4a8-269586e3dca1

## Documentation

Provide links to your project's documentation

## Support

Need help? Check out how to get [support](/SUPPORT.md).

## Contribution Guide

Please read our [contributing guide](./CONTRIBUTING.md) for details on contributing, how to setup your environment to develop locally, and details on submitting pull requests.

### Code of Conduct

This project adheres to the Contributor Covenant [code of conduct](./CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to one of the [maintainers](./SUPPORT.md#maintainers).

Add an image ![alt text](/doc/images.jpg) and another image ![alt text 2](./doc/images.png) followed by a link [link](/test.md) and then a legitimate image ![alt text 3](https://www.test.com/image.tiff).
