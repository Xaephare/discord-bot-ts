export default function stringify(seconds: number): string {
  const days = Math.floor(seconds / (3600 * 24));
  const hours = Math.floor((seconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);

  const dayWord = plurify("day", days);
  const hourWord = plurify("hour", hours);
  const minuteWord = plurify("minute", minutes);

  if (days > 0) {
    return `in \`${days}\` ${dayWord}, \`${hours}\` ${hourWord} and \`${minutes}\` ${minuteWord}`;
  } else if (hours > 0) {
    return `in \`${hours}\` ${hourWord} and \`${minutes}\` ${minuteWord}`;
  } else if (minutes > 0 && hours === 0) {
    return `in \`${minutes}\` ${minuteWord}`;
  } else {
    return `in \`${seconds}\` seconds`;
  }
}

function plurify(word: string, count: number): string {
  if (count === 1) {
    return word;
  } else {
    return word + "s";
  }
}
