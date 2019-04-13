// Typescript
enum level {
  beginner = 'Beginner ⭐️',
  intermediate = 'Intermediate ⭐️⭐️',
  advanced = 'Advanced ⭐️⭐️⭐️',
  expert = 'Expert 😈'
}

export interface Training {
  name: string
  date: string
  level: level
  description: string
  topics: string[]
  requirements: string[]
}

export const TRAININGS: Training[] = [
  {
    name: 'Ethereum',
    date: '',
    level: level.beginner,
    description: `
      Discover what is Ethereum. Create a wallet, exchange Ethers, and interact with smart-contracts.
      No programming skills required.
    `,
    topics: ['Blockchain', 'Consensus', 'Wallet'],
    requirements: []
  },
  {
    name: 'Solidity',
    date: '',
    level: level.beginner,
    description: `
      Create your first smart-contract Ethereum written in Solidity.
      Use the Remix IDE to deploy and interact with it on a testing network.
    `,
    topics: ['Smart-Contracts', 'Solidity', 'Network'],
    requirements: []
  },
  {
    name: 'Dapp',
    date: '',
    level: level.intermediate,
    description: 'Learn Solidity',
    topics: ['Javascript', 'Solidity', 'Testing'],
    requirements: []
  }
]
