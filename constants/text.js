const text = {
	start: `
	<b>🖐Welcome to Aleo Helper Bot, the nodes installation helper service!</b>
	\nWe are here to assist you with the installation and setup of your nodes, making the process quick and easy.\nWith our expert guidance, you'll have your nodes up and running in no time.
	\nDon't hesitate to reach out to us if you have any questions or concerns during the installation process. Thank you for choosing us!✌️
	\nCreated by <code>0xliam#6351</code> for <b>Aleo Community</b>💙
	\n<b>What do you interested in?</b>
	`,
	requirements: `
	<b>System requirements</b>
	\n<b>⚙️ Aleo Miner minimum:</b>
	\n<b>CPU</b> - 16 cores (32 preferred)\n<b>RAM</b> - 16GB (32 preferred)\n<b>OS</b> - Ubuntu 20.04 recommended, 18.04 should work\n<b>Storage</b> - 128GB\n<b>Network</b> - 50 Mbps upload/download\n<b>Note:</b>  You will require more than these requirement in order to be competitive`,
	faq: `
	<b>❓FAQ</b>
	\n<b>💙Aleo</b> - is the world’s first full-featured (zero-knowledge) private application development platform that is fast, consistent, and scalable. The use of this technology allows for a high level of privacy when working with the network - non-disclosure of the sender's wallet and transaction amount.
	\nThe main thing about Aleo is that it supports smart contracts, and consequently the possibility to create DApps on it. It has its own application development language and its own development environment (IDE).
	\nThe project raised $298M in the venture round from such funds as: a16z, Coinbase Ventures, Polychain, Slow Ventures, etc.
	\n<b>🖥Node Phases:</b> \nThe following phases are known at this time:\n· December 2, 2022 00:00 UTC - start of the testnet phase;\n· January 26, 2023 23:59 UTC - end of phase.
	\n<b>🏆Rewards for the node:</b>
	\n25M Aleo tokens are allocated for the current campaign, of which 30% or 7.5M are for testnet rewards. Tokens received during the incentive testnet period will be at the rate of 5 tokens from the test network = 1 from the main network. That said, if the network gains 7.5M tokens before January 26, the incentive phase will end early.
	\n❗️There is a risk that residents of the following regions will not be able to pass KYC: Cuba, Iran, North Korea, Russia, Syria, Crimea, Donetsk, and Luhansk Regions of Ukraine.`,
	installation_methods: `Choose what you need:`,
	installation_type: `Choose the installation type:`,
	installation_manual: {
		start: `
		<b>Linux (manual)</b>
		\nSelect a step:
		`,
		step1: `
		<b>Step 1 : Server preparation</b>
		\n<b>🔵 Update packages:</b>\n\n<code>sudo apt update && sudo apt upgrade -y</code>
		\n<b>🔵 Install the necessary packages:</b>
		\n<code>sudo apt install wget jq git build-essential pkg-config libssl-dev -y</code>
		\n<b>🔵 The version of Rust must be at least 1.65.0:</b>
		\n<code>rustc --version</code>
		\n<b>🔵 If not, delete with the command below and install again:</b>
		\n<code>. &lt;(wget -qO- https://raw.githubusercontent.com/SecorD0/utils/main/installers/rust.sh) \ -un</code>
		`,
		step2: `
		<b>Step 2 : Node installation</b>
		\n<b>🔵 Clone a repository with a node:</b>
		\n<code>cd; git clone https://github.com/AleoHQ/snarkOS.git --depth 1</code>
		\n<b>🔵 Go to the snarkOS folder:</b>
		\n<code>cd snarkOS</code>
		\n<b>🔵 Build a snarkOS binary:</b>
		\n<code>cargo build --release</code>
		\n<b>🔵 Copy the binary file into the standard binary file repository:</b>
		\n<code>mv $HOME/snarkOS/target/release/snarkos /usr/bin</code>
		`,
		step3: `
		<b>Step 3 : Create a wallet</b>
		\n<b>🔵 Already have a wallet:</b>
		\n🔵 Place a file called <code>aleo_account.txt</code>, necessarily containing the line:
		\n<code>Private key APrivateKey1___</code>
		\n🔵 The path (the command displays the path)
		\n<code>echo $HOME/aleo_account.txt</code>
		\n🔵 <b>No wallet yet:</b>
		\n🔵 Create a wallet:
		\n<code>snarkos account new > $HOME/aleo_account.txt</code>
		\n🔵<u>Make a backup copy of the wallet data file, saving it in a safe place (the command shows the path)</u>
		\n<code>echo $HOME/aleo_account.txt</code>
		\n<b>❗️ Do not show private key to anyone ❗️</b>
		`,
		step4: `
		<b>Step 4 : Adding a wallet</b>
		\n🔵 Add the <u>wallet address</u> to the system as a variable:
		\n<code>. &lt;(wget -qO- https://raw.githubusercontent.com/SecorD0/utils/main/miscellaneous/insert_variable.sh) -n aleo_wallet_address -v \`grep - oPm1 "(?&lt;=Address  )([^%]+)(?=$)" $HOME / aleo_account.txt\`</code>
		\n🔵 Add wallet <u>private key</u> to the system as a variable:
		\n<code>. &lt;(wget -qO- https://raw.githubusercontent.com/SecorD0/utils/main/miscellaneous/insert_variable.sh) -n aleo_private_key -v \`grep - oPm1 "(?&lt;=Private Key )([^%]+)(?=$)" $HOME / aleo_account.txt\`</code>
		\n🔵 Check that the variables have been added to the system:
		\n<code>echo $aleo_wallet_address $aleo_private_key</code>
		\n🔵 If one of them is missing, go back to the <u>wallet step</u>.
		\n🔵 Open the ports used:
		\n<code>. &lt;(wget -qO- https://raw.githubusercontent.com/SecorD0/utils/main/miscellaneous/ports_opening.sh) 3033 4133</code>
		`,
		step5: `
		<b>Step 5 : Creating and running a service file</b>
		\n<b>🔵 Create a service file:</b>
		\n<code>printf "[Unit]\nDescription=Aleo Prover\nAfter=network-online.target\n\n[Service]\nUser=$USERExecStart=\`which snarkos\` start --nodisplay --prover $aleo_private_key\nRestart=on-failure\nRestartSec=3\nLimitNOFILE=65535
		\n[Install]\nWantedBy=multi-user.target" > /etc/systemd/system/aleod.service</code>
		\n<b>🔵 Run the service file:</b>
		\n<code>sudo systemctl daemon-reload\nsudo systemctl enable aleod\nsudo systemctl restart aleod</code>
		\n🔵 Add a <u>command to view node log</u> to the system as a variable:
		\n<code>. &lt;(wget -qO- https://raw.githubusercontent.com/SecorD0/utils/main/miscellaneous/insert_variable.sh) -n aleo_log -v "sudo journalctl -fn 100 -u aleod" -a</code>
		\n<b>🔵 Check if the node is running:</b>
		\n<code>aleo_log</code>
		`
	},
	installation_automatic: `
	<b>Linux (automatic)</b>
	\n<b>🔵 Run the script and wait for the installation to finish:</b>
	\n<code>. &lt;(wget -qO- https://raw.githubusercontent.com/SecorD0/Aleo/main/multi_tool.sh)</code>
	\n🔵 In order to run the pruner on an already existing wallet, place the file named <code>aleo_account.txt</code>, which must contain the following line:
	\n<code>Private Key APrivateKey1___</code>
	\n<b>🔵 Path (the command shows the path):</b>
	\n<code>echo $HOME/aleo_account.txt</code>
	\n🔵 And run the script after that.
	`,
	update_type: `Choose the update type:`,
	update_manual: `
	<b>Manual</b>
	\n<b>🔵 If the GitHub repository with the node (snarkOS folder) is not downloaded, then clone it:</b>
	\n<code>cd; git clone https://github.com/AleoHQ/snarkOS.git --depth 1</code>
	\n<b>🔵 Update binary files:</b>
	\n<code>cd $HOME/snarkOS && \ \ngit stash; \ \ngit pull; \ \ncargo clean; \ \ncargo build --release; \ \nmv $HOME/snarkOS/target/release/snarkos /usr/bin; \ \ncd</code>
	\n<b>🔵 Restart service file:</b>
	\n<code>sudo systemctl restart aleod</code>
	`,
	update_automatic: `
	<b>Automatic</b>
	\n<b>🔵 Create a folder for node files:</b>
	\n<code>mkdir -p $HOME/.aleo</code>
	\n<b>🔵 Create a service file:</b>
	\n<code>sudo tee &lt;&lt;EOF &gt;/dev/null /etc/systemd/system/aleou.service\n[Unit]\nDescription=Aleo auto-updater\nAfter=network.target
	\n[Service]\ntype=forking\nUser=$USER\nEnvironment="HOME=$HOME"\nWorkingDirectory=$HOME\nExecStartPre=\`which wget\` -qO $HOME/.aleo/multi_tool.sh https://raw.githubusercontent.com/SecorD0/Aleo/main/multi_tool.sh\nExecStartPre=\`which chmod\` +x $HOME/.aleo/multi_tool.sh\nExecStart=$HOME/.aleo/multi_tool.sh -up\nRestart=always\nRestartSec=5m
	\n[Install]\nWantedBy=multi-user.target\nEOF
	</code>
	`,
	update_semi: `
	<b>Semi-Automatic</b>
	\n<b>🔵 Run the script and wait for the update to finish:</b>
	\n<code>. &lt;(wget -qO- https://raw.githubusercontent.com/SecorD0/Aleo/main/multi_tool.sh) -up</code>
	`,
	uninstalling: `
	<b>Uninstalling</b>
	\n<b>🔵 Stop the node:</b>
	\n<code>sudo systemctl stop aleod</code>
	\n<b>🔵 Delete a service file:</b>
	\n<code>sudo systemctl disable aleod\nrm -rf /etc/systemd/system/aleod.service\nsudo systemctl daemon-reload</code>
	\n<b>🔵 Delete the project folder and the binary file:</b>
	\n<code>rm -rf $HOME/snarkOS /usr/bin/snarkos</code>
	`,
	commands: `
	<b>Useful Commands</b>
	\n<b>🔵 Available variables (when using remove echo):</b>
	\n<code>echo $aleo_wallet_address\necho $aleo_private_key</code>
	\n<b>🔵 View the log:</b>
	\n# for the prover
	\n<code>aleo_log\nsudo journalctl -fn 100 -u aleod</code>
	\n# for the automatic update script
	\n<code>sudo journalctl -fn 100 -u aleou</code>
	\n<b>🔵 Restart the node:</b>
	\n<code>sudo systemctl restart aleod</code>
	\n<b>🔵 Stop the automatic update script:</b>
	\n<code>sudo systemctl stop aleou</code>
	`
}

module.exports = text