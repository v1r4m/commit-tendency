export default function Home() {
  const githubUrl = `https://github.com/login/oauth/authorize?client_id=${process.env.CLIENT_ID}&redirect_uri=http://localhost:3000/login/github/callback`;
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-6xl font-bold">Welcome to Commit Tendency</h1>
      <p className="mt-3 text-2xl">Analyze your github commit tendency</p>
      <a
        href={githubUrl}
        className="mt-8 p-6 bg-blue-600 rounded-lg text-white"
      >
        Login with GitHub
      </a>
    </div>
  );
}
