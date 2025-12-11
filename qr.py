import qrcode
import csv
import os

# Create output folder if not exists
output_folder = "../qr_output"
if not os.path.exists(output_folder):
    os.makedirs(output_folder)

# Read links from CSV
with open("../links.csv", "r") as file:
    reader = csv.reader(file)
    for row in reader:
        label, url = row
        qr = qrcode.make(url)
        qr.save(f"{output_folder}/{label}.png")

print("QR Codes generated successfully!")