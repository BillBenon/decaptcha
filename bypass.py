from hcapbypass import bypass
import sys

captcha_solved = bypass('6Le3UCIkAAAAAMk8D3HssRFGJUWw-xjRDLxjUUgU', 'discord.com', sys.argv[1], True)
print(captcha_solved)

