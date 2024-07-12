import { Card } from "@/components/ui/card";

const About = () => (
  <div className="container mx-auto px-4 py-8 space-y-8">
    <Card className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">About Tic Tac Toe</h1>
      <p className="text-lg text-center max-w-2xl mx-auto mb-8">
        Our classic Tic Tac Toe game allows players to compete online in a fun and engaging environment.
        Experience the timeless strategy game with a modern twist!
      </p>
    </Card>

    <Card className="p-8">
      <h2 className="text-2xl font-semibold text-center mb-6">Key Features</h2>
      <ul className="space-y-4">
        <li className="flex items-center bg-muted p-4 rounded-md">
          <svg className="w-6 h-6 text-primary mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="text-lg">Real-time multiplayer gameplay</span>
        </li>
        <li className="flex items-center bg-muted p-4 rounded-md">
          <svg className="w-6 h-6 text-primary mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="text-lg">Intuitive and responsive design</span>
        </li>
        <li className="flex items-center bg-muted p-4 rounded-md">
          <svg className="w-6 h-6 text-primary mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="text-lg">Cross-platform compatibility</span>
        </li>
      </ul>
    </Card>

    <Card className="p-8">
      <h2 className="text-2xl font-semibold mb-4">How to Play</h2>
      <p className="text-lg mb-4">
        Playing Tic Tac Toe is easy and fun! Here's a quick guide:
      </p>
      <ol className="list-decimal list-inside space-y-2 text-lg pl-4">
        <li>The game is played on a 3x3 grid.</li>
        <li>Players take turns placing their symbol (X or O) in empty cells.</li>
        <li>The first player to get three of their symbols in a row (horizontally, vertically, or diagonally) wins.</li>
        <li>If all cells are filled and no player has won, the game is a draw.</li>
      </ol>
    </Card>
  </div>
);

export default About;