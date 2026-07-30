export const DEFAULT_LANG = 'en_US'

const dict = {
  // main.ts
  'Starting Bisq!': 0,
  'Bisq Desktop': 1,
  'Bisq desktop is ready': 2,
  'Bisq desktop is not ready': 3,

  // interfaces.ts
  'Access the Bisq desktop application through your web browser': 4,

  // actions/setPassword.ts
  'Set Admin Password': 5,
  'Generate a new random password for the Bisq admin user desktop': 6,

  // init/seedFiles.ts
  'Set your admin password': 7,

  // actions/setPassword.ts
  'Bisq Credentials': 8,
  'Use these credentials to log into the Bisq desktop interface:': 9,
  Username: 10,
  Password: 11,

  // actions/configureBitcoinConnection.ts
  'Bitcoin Connection Mode': 12,
  'Local node only requires your StartOS Bitcoin service. Bisq network fallback uses remote Bisq Bitcoin peers over Tor.': 13,
  'Local node only (recommended)': 14,
  'Bisq network fallback': 15,
  'Configure Bitcoin Connection': 16,
  'Choose whether Bisq requires your local Bitcoin node or uses the Bisq network fallback.': 17,

  // dependencies.ts
  'Enable bloom filters so Bisq can use your Bitcoin service': 18,
} as const

/**
 * Plumbing. DO NOT EDIT.
 */
export type I18nKey = keyof typeof dict
export type LangDict = Record<(typeof dict)[I18nKey], string>
export default dict
