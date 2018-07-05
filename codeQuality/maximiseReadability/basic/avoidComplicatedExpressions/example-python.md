<tip-box>

{{ icon_example }} Example: 

{{bad}}
```python
return ((length < MAX_LENGTH) or (previous_size != length)) and (type_code == URGENT)
```

{{good}}
```python
is_within_size_limit = length < MAX_LENGTH
is_same_size = previous_size != length
is_valid_code = is_within_size_limit or is_same_size

is_urgent = type_code == URGENT

return is_valid_code and is_urgent
```

</tip-box>