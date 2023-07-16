/* eslint-disable */
// BEFORE RUNNING:
// ---------------
// 1. If not already done, enable the Google Sheets API
//    and check the quota for your project at
//    https://console.developers.google.com/apis/api/sheets
// 2. Install the Node.js client library by running
//    `npm install googleapis --save`

require('dotenv').config()
const { google } = require('googleapis')

// @ts-ignore Duplicate identifier 'LearningContentProperties'.
type LearningContentProperties = {
  uuid: string
  contentTitle: string
  contentDescription: string
  contentType: string
  contentUrl: string
  contentThumbnail: string
  contentAuthor: string
  contentUploadDate: string
}

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.CLIENT_EMAIL,
    client_id: process.env.CLIENT_ID,
    private_key: process.env.PRIVATE_KEY?.replace(/\\n/g, '\n'),
  },
  scopes: [
    'https://www.googleapis.com/auth/drive',
    'https://www.googleapis.com/auth/drive.file',
    'https://www.googleapis.com/auth/spreadsheets',
  ],
})

const sheets = google.sheets({
  auth,
  version: 'v4',
})

async function fetchStaff() {
  const spreadsheetId = process.env.SHEETS_SUMBERBELAJAR_OPERATIONS
  const range = 'contentdata'
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range,
  })

  const rows = response.data.values
  const content: LearningContentProperties[] = []
  if (rows.length) {
    rows.map((row: any) => {
      content.push({
        uuid: row[0],
        contentTitle: row[1],
        contentAuthor: row[2],
        contentType: row[3],
        contentDescription: row[4],
        contentUrl: row[5],
        contentThumbnail: row[6],
        contentUploadDate: row[7],
      })
      console.log(
        `${row[0]}, ${row[1]}, ${row[2]}, ${row[3]}, ${row[4]}, ${row[5]}, ${row[6]}, ${row[7]}`,
      )
    })
  } else {
    console.log('No data found.')
  }

  content.shift()

  const contentObj = {
    learningcontent: content,
  }

  // save to json file, if not exists, create the filr
  const fs = require('fs')
  fs.writeFile(
    'apps/oer-center/data/learning.content.json',
    JSON.stringify(contentObj),
    function (err: any) {
      if (err) throw err
      console.log('Warehouse Data Fetched Successfully!!!')
    },
  )
}

fetchStaff()
