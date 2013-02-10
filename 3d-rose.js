// http://www.romancortes.com/
m = Math;
cos = Math.cos;
sin = Math.sin;
pow = Math.pow;

c.height = f = W = 256;
imageData = a.getImageData(0, 0, 256, 256); 
pixelData = imageData.data; // Array of zeroes 256 (height) * 256 (width) * 4 (RGBA) = 262144 (or 2^18)
D = {};
F = [];

function J(p) {
    p[5] = Q = 0;
    for (j = 3; j--;) {
      if (!D[Q = (p[j] >>= 2) + Q * f]) {
        D[Q] = F.push(p);
      }
    }
}

var animate = function () {
    for (i = 1e3; i--;) {
        c = i % 42 * 1.35;
        H = T;
        T = m.random();
        A = H * 2 - 1;
        B = T * 2 - 1;

        o = 13 + 5 / (.2 + pow(T * 4, 4));
        l = cos(H * 7);
        G = l / 7 + .5;
        // Draw the stem without leaves
        J([
            sin(H * 7) * o - T * 50,
            T * 550 + 500,
            l * o,
            G - T / 4, 
            G
          ]);
        if (A * A + B * B < 1) {
          if (c > 32) {
              // Draw leaves
              o = .5 / (H + .01) - H * 300;
              j = c & 1;
              n = j ? 6 : 4;
              w = T * -f;
              l = 1 - B * B;
              J([
                  o * cos(n) + w * sin(n) + j * 630 - 390,
                  o * sin(n) - w * cos(n) + 999 - j * 350,
                  cos(B + A) * 99 - j * 50,
                  (pow(l, f * 6) + cos(H + T) + pow(cos((o * H + o + (B > 0 ? w : -w)) / 25), 30) * l - H + 2) / 5,
                  o / 1e3 + .7 - o * w / 3e5
                ]);

              // Sepals - skinny four or five leaves under the flower
              o = H * 45 - 20;
              l = c / .86;
              w = T * T;
              J([
                  o * cos(l) + w * f * sin(l),
                  cos(B / 2) * 99 - w * T * 60 + 436,
                  o * sin(l) - w * f * cos(l),
                  w * .3 + .3, T * .7
                ]);
          } else { 
            // Flower petals
            o = A * (2 - T) * (80 - c * 2);
            w = 99 - cos(A) * 120 - cos(T) * (f - c * 5) + cos(pow(1 - T, 7)) * 50 + c * 2;
            J([
                o * cos(c) - w * sin(c),
                (B * 2 - cos(pow(T, 7)) + 9) * 50,
                o * sin(c) + w * cos(c),
                1 - T * .7,
                pow(1 - T, 9) / 4
              ]);
          }
        }
    }
    // Required to draw ... clear to white
    for (i = 0; i < f * f; m[i++] = f) {
      for (l = 4; l--;) {
        pixelData[i * 4 + l] = 255;
      }
    }
    for (c = cos(W), s = sin(W), j = F.length; j--;) {
        var k = F[j];
        var x = k[0] * c + k[2] * s + 99;
        var z = k[0] * s - k[2] * c; 
        var y = k[1] - z * .4 << 8;
        for (i = 3; i--;) {
          if (z < m[p = y - ~x + [0, 1, f][i]]) {
            for (m[p] = z, l = 3; l--;) {
              pixelData[p * 4 + l] = k[l + 3] * f;
            }
          }
        }
    }
    a.putImageData(imageData, 0, 0);
    // left-handed rotation around stem
    W += .03;
};
setInterval(animate, T = 0);
