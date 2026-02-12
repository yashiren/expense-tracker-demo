# 💰 UAE Expense Tracker - Demo

**Live Demo:** [https://yashiren.github.io/expense-tracker-demo/](https://yashiren.github.io/expense-tracker-demo/)

A mobile-first web application that demonstrates automatic expense tracking from UAE bank SMS notifications.

## 🎯 What This Demo Shows

This is a **proof-of-concept** showing how an expense tracker would work for UAE residents by automatically parsing bank transaction SMS messages.

### Features Demonstrated:
- ✅ **Automatic SMS Parsing** - Reads transaction details from major UAE banks
- ✅ **Real-time Dashboard** - Daily, weekly, and monthly spending overview
- ✅ **Smart Categorization** - Auto-categorizes expenses (Food, Transport, Shopping, etc.)
- ✅ **Budget Tracking** - Set monthly budgets and track progress
- ✅ **Visual Analytics** - Spending charts and category breakdowns
- ✅ **Transaction History** - Search and filter past transactions
- ✅ **Mobile-Optimized** - Designed for phone screens

## 🏦 Supported Banks

The demo includes SMS parsing patterns for:
- Emirates NBD (ENBD)
- Abu Dhabi Commercial Bank (ADCB)
- First Abu Dhabi Bank (FAB)
- Mashreq Bank
- Commercial Bank of Dubai (CBD)
- RAK Bank
- HSBC UAE
- Citibank UAE
- Emirates Islamic

## 🚀 How It Works

1. **SMS Detection** - Monitors incoming SMS from bank shortcodes
2. **Smart Parsing** - Extracts amount, merchant, date from message text
3. **Auto-Categorization** - Uses merchant name to categorize spending
4. **Local Storage** - All data stored on your device (privacy-first)
5. **Visual Dashboard** - See spending patterns at a glance

## 📱 Tech Stack

- **Frontend:** Pure HTML, CSS, JavaScript (vanilla JS)
- **Charts:** Chart.js for spending visualizations
- **Storage:** LocalStorage (no backend required)
- **Mobile-First:** Responsive design optimized for phones

## 🎨 Screenshots

The demo includes:
- Dashboard with spending overview
- Transaction list with categories
- Budget tracking with progress bars
- Spending charts (daily/weekly/monthly)
- Sample transactions from different UAE banks

## 💡 Use Cases

Perfect for:
- UAE residents tracking personal expenses
- Freelancers monitoring business spending
- Anyone wanting automatic expense categorization
- Budget-conscious individuals

## 🔐 Privacy & Security

- **100% Local** - All data stored on your device only
- **No Backend** - No server, no data transmission
- **No Tracking** - No analytics, no third-party scripts
- **Open Source** - Full transparency

## 📊 Sample Data

The demo includes realistic sample transactions showing:
- Restaurant purchases (Zomato, Deliveroo, local cafes)
- E-commerce (Amazon, Noon, Namshi)
- Transportation (Uber, Careem, fuel)
- Groceries (Carrefour, Spinneys, Union Coop)
- Utilities and bills

## 🛠️ Local Development

Want to run it locally or customize it?

```bash
# Clone the repo
git clone https://github.com/yashiren/expense-tracker-demo.git

# Open in browser
cd expense-tracker-demo
open index.html
```

No build process needed - it's pure HTML/CSS/JS!

## 📬 Contact

**Developer:** Yash Nair  
**Email:** yashiren.nair@gmail.com

Questions, suggestions, or want to collaborate? Reach out!

## 📄 License

MIT License - Free to use, modify, and distribute

## 🌟 Future Enhancements

Potential features for a full production version:
- Real SMS integration (Android/iOS native apps)
- Cloud backup with end-to-end encryption
- Multi-currency support
- Receipt photo attachments
- Export to Excel/PDF
- Spending insights and recommendations
- Bill payment reminders
- Split expense tracking

---

**⭐ Star this repo if you find it useful!**

Built with ❤️ for UAE residents
