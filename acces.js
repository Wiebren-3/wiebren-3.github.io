const webhookURL = "https://discord.com/api/webhooks/1163031346214600727/_kIeBViIzydspGZF8BT6OuSdxOFLh3XkKqJCOAUwciqgYCV5DYqKRCtRGQvB8ItbQnnQ";

const getCDStamp = (timestamp = Date.now()) => `<t:${Math.round(timestamp / 1000)}:R>`;

const sendEmbedToDiscord = () => {
  const embedColorDecimal = 65280; // Green color in decimal (you can choose a different color)

  const timestamp = new Date().toISOString(); // Current timestamp in ISO 8601 format
  const discordTimestamp = getCDStamp();

  const embed = {
    title: "Someone opened your Site",
    author: {
      name: "Website Access - WIEBREN",
      icon_url: "https://media.discordapp.net/attachments/1157987906741338203/1157988095577313290/e8e828e011b97b24f1956b0d7292709d.png?ex=6534f9f4&is=652284f4&hm=d87505f44ed378164813cdf3b9027fbf179795f90ada50d869337727716e1110&=&width=192&height=192"
    },
    description: `Someone visited the site. On ${discordTimestamp}`,
    color: 98255,
    timestamp
  };

  const message = {
    content: "<@757615872998244392>",
    embeds: [embed]
  };

  fetch(webhookURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(message),
  })
  .then(response => response.json())
  .then(data => console.log("Embed sent to Discord:", data))
  .catch(error => console.error("Error sending embed to Discord:", error));
};

// Call the function when the page is loaded
window.onload = sendEmbedToDiscord;
