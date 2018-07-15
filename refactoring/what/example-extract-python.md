```python
def print_owing():
    print_banner()

    //print details
    print("name:	" + name)
    print("amount	" + get_outstanding())
```
{{ icon_output }}
```python
def print_owing():
    print_banner()
    print_details(get_outstanding())

def print_details(amount):
    print("name:	" + name)
    print("amount	" + amount)
```