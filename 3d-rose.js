// http://www.romancortes.com/
with(m = Math) C = cos, S = sin, P = pow;
O = a.getImageData(0, 0, c.height = f = W = 256, f);
U = O.data;
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
        J([S(H * 7) * (o = 13 + 5 / (.2 + P(T * 4, 4))) - T * 50, T * 550 + 500, (l = C(H * 7)) * o, (G = l / 7 + .5) - T / 4, G]);
        if (A * A + B * B < 1) if (c > 32) {
            J([(o = .5 / (H + .01) - H * 300) * C(n = (j = c & 1) ? 6 : 4) + (w = T * -f) * S(n) + j * 630 - 390, o * S(n) - w * C(n) + 999 - j * 350, C(B + A) * 99 - j * 50, (P(l = 1 - B * B, f * 6) + C(H + T) + P(C((o * H + o + (B > 0 ? w : -w)) / 25), 30) * l - H + 2) / 5, o / 1e3 + .7 - o * w / 3e5]);
            J([(o = H * 45 - 20) * C(l = c / .86) + (w = T * T) * f * S(l), C(B / 2) * 99 - w * T * 60 + 436, o * S(l) - w * f * C(l), w * .3 + .3, T * .7])
        } else J([(o = A * (2 - T) * (80 - c * 2)) * C(c) - (w = 99 - C(A) * 120 - C(T) * (f - c * 5) + C(P(1 - T, 7)) * 50 + c * 2) * S(c), (B * 2 - C(P(T, 7)) + 9) * 50, o * S(c) + w * C(c), 1 - T * .7, P(1 - T, 9) / 4])
    }
    for (i = 0; i < f * f; m[i++] = f) for (l = 4; l--;) U[i * 4 + l] = 255;
    for (c = C(W), s = S(W), j = F.length; j--;) {
        var k = F[j];
        var x = k[0] * c + k[2] * s + 99;
        var z = k[0] * s - k[2] * c; 
        var y = k[1] - z * .4 << 8;
        for (i = 3; i--;) {
          if (z < m[p = y - ~x + [0, 1, f][i]]) {
            for (m[p] = z, l = 3; l--;) {
              U[p * 4 + l] = k[l + 3] * f;
            }
          }
        }
    }
    a.putImageData(O, 0, 0);
    W += .03;
};
setInterval(animate, T = 0);
