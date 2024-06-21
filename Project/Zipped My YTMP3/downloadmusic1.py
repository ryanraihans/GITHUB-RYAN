# To run the code you need to instal pytube first
# you can instal pytube in terminal using = pip install pytube
from pytube import YouTube
import os
# Input Music URL (Youtube Link)
url = "https://www.youtube.com/watch?v=BOhK3VCumjo"

# The command to downlaod
try :
    # Create Object 
    video = YouTube(url)

    # stream.filter digunakan untuk mendownload 
    # dan first digunakan untuk memilih yang pertama
    stream = video.streams.filter(only_audio=True).first()

    # menamai file yang di download
    stream.download(filename=f"{video.title}.mp3")
    
    
    # Exception
except KeyError :
    print("Ada Error, Mohon cek kembali Link")