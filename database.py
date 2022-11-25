import harperdb

HARPERDB_PASSWORD = '@0519Dieferson'
HARPERDB_URL = "https://notesapp-sigmadev.harperdbcloud.com"
HARPERDB_USERNAME = "notesapp"
db = harperdb.HarperDB(
    url=HARPERDB_URL,
    username=HARPERDB_USERNAME,
    password=HARPERDB_PASSWORD
)