
```python
import unittest

class Foo:
  def read(self):
      # ...
  
  def write(self, input):
      # ...


class FooTest(unittest.TestCase):
  
  def test_read(sefl):
      # a unit test for read() method
  
  def test_write_emptyIntput_ignored(self):
      # a unit tests for write(string) method
  
  def test_write_normalInput_writtenCorrectly(self):
      # another unit tests for write(string) method
```