export default function Footer() {
  return (
    <footer className="text-center py-6 text-gray-700 dark:text-gray-300 bg-transparent dark:bg-gray-900">
      <p>
        ✨ Classic Rock + Beach + Barkadahan ={" "}
        <span className="font-semibold text-amber-600 dark:text-amber-400">
          Legendary Night
        </span>{" "}
        🤘🏖️
      </p>
      <p className="mt-2 text-sm italic dark:text-gray-400">
        Made with ❤️ by <strong>Mark Alexis Posadas</strong> | Powered by{" "}
        <a
          href="https://openai.com/chatgpt"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-amber-500"
        >
          ChatGPT
        </a>
      </p>
    </footer>
  );
}
