import unittest

import unittest.test
from mymodule import square, double, add

class TestSquare(unittest.TestCase):
    def test(self):
        self.assertEqual(square(2), 4)
        self.assertEqual(square(0), 0)
        self.assertEqual(square(-2), 4)
        self.assertEqual(square(3.0), 9.0)

class TestDouble(unittest.TestCase):
    def test(self):
        self.assertEqual(double(0),0)
        self.assertEqual(double(10),20)
        self.assertEqual(double(-20),-40)
        self.assertEqual(double(4.0),8.0)

class TestAdd(unittest.TestCase):
    def test(self):
        self.assertEqual(add(0,0),0)
        self.assertEqual(add(9.5, 1), 10.5)
        self.assertEqual(add('mate','yes'), 'mateyes')
        self.assertNotEqual(add(-2,-2),0)

if __name__ == '__main__':
    unittest.main()