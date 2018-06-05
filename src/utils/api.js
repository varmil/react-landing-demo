// WARN: spreadsheets info (must be used in only dev)
export const SHEET_PRODUCTS = 'products.csv'
export const SHEET_CATEGORIES = 'categories.csv'
export const SHEET_FILTERS = 'filters.csv'

export function getURL (sheetName) {
  const SPREADSHEET_ID = 'aaa'
  const MY_API_KEY = 'fff'
  return `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${sheetName}?key=${MY_API_KEY}`
}

export function csvToObject (data) {
  return data.slice(1).map((xs) => {
    return xs.reduce((acc, x, i) => {
      acc[data[0][i]] = x
      return acc
    }, {})
  })
}
