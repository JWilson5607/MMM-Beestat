# MMM-Beestat
MagicMirror module to get Ecobee Runtime via a Beestat API
# MMM-Beestat
MagicMirror module to get Ecobee usage via Beestat
For more information visit: https://beestat.io

## API
Uses the open api that Beestat provides
https://api.beestat.io/doc
You will have to request the api key from beestat

## Preview
![screenshot1](screenshot1.JPG)

## Installing the module
Go to your MagicMirror modules directory by entering `cd MagicMirror/modules`

run `git clone https://github.com/JWilson5607/MMM-Beestat`

run `cd MMM-Beestat` to get into the newly created folder

run `npm install` to install the chart.js dependencies

## Config
Add `MMM-Beestat` module to the `modules` array in the `config/config.js` file:
````javascript
modules: [
  {
			module: "MMM-Beestat",
			position: "top_right",
			header: "Ecobee Runtime",
			config: {
				api_key: "", //request it from beestat
				thermostat_id: , //via &resource=ecobee_thermostat&method=read_id
				time_period: "day",
				time_count: 30,
				chart_title: "Last 30 Days",
				width: 600,
				height:400
			}
		},
]
